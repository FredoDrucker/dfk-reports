import React, { useState, useEffect } from 'react';
import BaseTable from './base-table';
import RPC from '../../harmony-api/rpc';

function TransactionsTable({address}) {
    const [transactionsHistory, setTransactionsHistory] = useState(null)

    useEffect(() => {
        RPC.hmyv2_getTransactionsCount(address).then(tcData => {
            var pageSize = 10;
            var pageIndex = 0;
            var transactionsHistoryResult = [];
            while(pageIndex*pageSize < tcData.result){
                RPC.hmyv2_getTransactionsHistory(address, pageIndex, pageSize, true, "ALL", "ASC").then(tfData => {
                    transactionsHistoryResult.push(...tfData.result.transactions)
                });
                pageIndex++;
            }
            console.log(transactionsHistoryResult);
            setTransactionsHistory(transactionsHistoryResult)
        });

    },[]);


    const columns = React.useMemo(
        () => [
            {
                Header: 'First Name',
                accessor: 'firstName',
            },
            {
                Header: 'Last Name',
                accessor: 'lastName',
            },
            {
                Header: 'Age',
                accessor: 'age',
            },
            {
                Header: 'Visits',
                accessor: 'visits',
            },
            {
                Header: 'Status',
                accessor: 'status',
            },
            {
                Header: 'Profile Progress',
                accessor: 'progress',
            },
        ],
        []
    );
    var t_data = [{
        firstName: "firstName",
        lastName: "lastName",
        age: 20,
        visits: 21,
        progress: 22,
        status: "single"
    }];

    return (
        <>
            <BaseTable columns={columns} data={t_data}></BaseTable>
        </>
    )
}
export default TransactionsTable