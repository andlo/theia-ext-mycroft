import { ContainerModule } from "inversify";
import { MycroftContribution } from './mycroft-contribution';
import { CommandContribution, MenuContribution } from "@theia/core/lib/common";

export default new ContainerModule(bind => {
    bind(CommandContribution).to(MycroftContribution);
    bind(MenuContribution).to(MycroftContribution);
});