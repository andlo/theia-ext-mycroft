import { injectable } from "inversify";
import { CommonMenus } from "@theia/core/lib/browser";
import { Command, CommandContribution, CommandRegistry, MenuContribution, MenuModelRegistry } from "@theia/core/lib/common";

export namespace MycroftCommands {
    export const MycroftCategory = 'Mycroft';
    export const Help: Command = {
        id: 'mycroft.help',
        category: MycroftCategory,
        label: 'Mycroft Help'
    }
};

@injectable()
export class MycroftContribution implements CommandContribution, MenuContribution {

    registerCommands(registry: CommandRegistry): void {
        registry.registerCommand(MycroftCommands.Help, {
            execute: () => console.log('help called!')
        });
    }

    registerMenus(registry: MenuModelRegistry): void {
        registry.registerMenuAction(CommonMenus.HELP, {
            commandId: MycroftCommands.Help.id,
        })
    }
}
