// Type definitions for ag-grid v10.0.1
// Project: http://www.ag-grid.com/
// Definitions by: Niall Crosby <https://github.com/ceolter/>
import { Component } from "../../widgets/component";
import { ICellRenderer } from "./iCellRenderer";
export declare class GroupCellRenderer extends Component implements ICellRenderer {
    private static TEMPLATE;
    private gridOptionsWrapper;
    private expressionService;
    private eventService;
    private cellRendererService;
    private valueFormatterService;
    private context;
    private columnController;
    private frameworkFactory;
    private eExpanded;
    private eContracted;
    private eCheckbox;
    private eValue;
    private eChildCount;
    private params;
    private nodeWasSwapped;
    constructor();
    init(params: any): void;
    private setParams(params);
    private setupComponents();
    private isFirstChildOfFirstChild(rowNode, rowGroupColumn);
    private getRowGroupColumn(params);
    private isGroupKeyMismatch();
    private embeddedRowMismatch();
    private addPadding();
    private addValueElement();
    private createFromInnerRenderer();
    private createFooterCell();
    private createGroupCell();
    private addChildCount();
    private updateChildCount();
    private getGroupName();
    private createLeafCell();
    private isUserWantsSelected();
    private addCheckboxIfNeeded();
    private addExpandAndContract();
    private onKeyDown(event);
    onExpandOrContract(): void;
    private showExpandAndContractIcons();
}
