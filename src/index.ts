import { ExtensionContext, services, workspace, LanguageClient, ServerOptions, LanguageClientOptions } from 'coc.nvim';

export async function activate(context: ExtensionContext): Promise<void> {
  const config = workspace.getConfiguration('coc-grain');
  const isEnabled = config.get<boolean>('enable', true);
  if (!isEnabled) {
    return;
  }

  const serverOptions: ServerOptions = {
    command: 'grain',
    args: ['lsp'],
  };

  const clientOptions: LanguageClientOptions = {
    documentSelector: ['grain'],
  };

  const client = new LanguageClient('coc-grain', 'coc-grain', serverOptions, clientOptions);
  context.subscriptions.push(services.registLanguageClient(client));
}
