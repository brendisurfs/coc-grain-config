import {
  commands,
  CompleteResult,
  ExtensionContext,
  LanguageClient,
  listManager,
  sources,
  window,
  services,
  workspace,
} from 'coc.nvim';
import DemoList from './lists';

export async function activate(context: ExtensionContext): Promise<void> {
  const serverOtpions = {
    command: 'grain lsp',
  };

  const clientOptions = {
    documentSelector: ['grain'],
  };

  const client = new LanguageClient('coc-grain', 'coc-grain', serverOtpions, clientOptions);

  context.subscriptions.push(services.registLanguageClient(client));

  window.showMessage(`coc-grain works!`);

  context.subscriptions.push(
    commands.registerCommand('coc-grain.Command', async () => {
      window.showMessage(`coc-grain Commands works!`);
    }),

    listManager.registerList(new DemoList(workspace.nvim)),

    sources.createSource({
      name: 'coc-grain completion source', // unique id
      doComplete: async () => {
        const items = await getCompletionItems();
        return items;
      },
    }),

    workspace.registerKeymap(
      ['n'],
      'grain-keymap',
      async () => {
        window.showMessage(`registerKeymap`);
      },
      { sync: false }
    ),

    workspace.registerAutocmd({
      event: 'InsertLeave',
      request: true,
      callback: () => {
        window.showMessage(`registerAutocmd on InsertLeave`);
      },
    })
  );
}

async function getCompletionItems(): Promise<CompleteResult> {
  return {
    items: [
      {
        word: 'TestCompletionItem 1',
        menu: '[coc-grain]',
      },
      {
        word: 'TestCompletionItem 2',
        menu: '[coc-grain]',
      },
    ],
  };
}
