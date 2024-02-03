import React from 'react';
import { GridComponent, Inject, ColumnsDirective, ColumnDirective, Search, Page, Toolbar } from '@syncfusion/ej2-react-grids';

import { employeesData, employeesGrid } from '../../dash/data/dummy';
import { Header } from '../../components/Dashboard';

const Employees = () => {
    const toolbarOptions = ['Search', 'Delete'];  // Ajout de l'option 'Delete' à la barre d'outils

    const editing = { allowDeleting: true, allowEditing: true };

    return (
        <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl">
            <Header category="Page" title="Lawyers" />
            <GridComponent
                dataSource={employeesData}
                width="auto"
                allowPaging
                allowSorting
                pageSettings={{ pageCount: 5 }}
                editSettings={editing}
                toolbar={toolbarOptions}
            >
                <ColumnsDirective>
                    {/* eslint-disable-next-line react/jsx-props-no-spreading */}
                    {employeesGrid.map((item, index) => <ColumnDirective key={index} {...item} />)}
                </ColumnsDirective>
                <Inject services={[Search, Page, Toolbar]} />
            </GridComponent>
        </div>
    );
};
export default Employees;
