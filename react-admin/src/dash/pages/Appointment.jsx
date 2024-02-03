import React from 'react'
import { GridComponent, ColumnsDirective, ColumnDirective, Resize, Sort, ContextMenu,Toolbar, Filter, Page, ExcelExport, PdfExport, Edit, Inject } from '@syncfusion/ej2-react-grids';

import { ordersData, contextMenuItems, ordersGrid } from '../data/dummy';
import { Header } from '../../components/Dashboard';

const Appointment = () => {
    
    const editing = { allowDeleting: true, allowEditing: true };
    const toolbarOptions = ['Delete'];
    return (
        
        <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl">
        <Header category="Page" title="Appointment" />
        <GridComponent
            id="gridcomp"
            dataSource={ordersData}
            allowPaging
            allowSorting
            allowExcelExport
            allowPdfExport
            contextMenuItems={contextMenuItems}
            editSettings={editing}
            toolbar={toolbarOptions}
        >
            <ColumnsDirective>
            {/* eslint-disable-next-line react/jsx-props-no-spreading */}
            {ordersGrid.map((item, index) => <ColumnDirective key={index} {...item} />)}
            </ColumnsDirective>
            <Inject services={[Resize, Sort, ContextMenu,Toolbar, Filter, Page, ExcelExport, Edit, PdfExport]} />
        </GridComponent>
        </div>
    );
    
}

export default Appointment;



