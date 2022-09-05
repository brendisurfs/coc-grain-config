import { ExtensionContext, services, workspace, LanguageClient } from 'coc.nvim';

export async function activate(context: ExtensionContext): Promise<void> {
  const serverOptions = {
    command: 'grain lsp',
  };

  const clientOptions = {
    documentSelector: ['grain'],
  };

  const client = new LanguageClient('coc-grain', 'coc-grain', serverOptions, clientOptions);

  context.subscriptions.push(services.registLanguageClient(client));
}
