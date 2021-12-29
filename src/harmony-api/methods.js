class HarmonyMethods {
    static hmy_getTransactionCount = async function (address, block = "latest") {
        var r_data = {
            jsonrpc: "2.0",
            method: "hmyv2_getTransactionCount",
            params: [
                address,
                block
            ],
            id: 1
        }
        const response = await fetch('http://s0.b.hmny.io:9500', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(r_data)
        });
        return await response.json();
    }

    // async function address(id, offset, page, tx_view) {
    //     const response = await fetch('e0.b.hmny.io:5000/address?id=' + id + '&tx_view=' + tx_view + '&offset=' + offset + '&page=' + page + '', {
    //         method: 'GET',
    //         headers: {
    //             'Content-Type': 'application/json'
    //         }
    //     });
    //     return await response.json();
    // }

    // function hmyv2_getTransactionsHistory() {
    //     var r_data = {
    //         jsonrpc: "2.0",
    //         id: 1,
    //         method: "hmyv2_getTransactionsHistory",
    //         params: [
    //             {
    //                 address: "one15vlc8yqstm9algcf6e94dxqx6y04jcsqjuc3gt",
    //                 pageIndex: 0,
    //                 pageSize: 1,
    //                 fullTx: true,
    //                 txType: "ALL",
    //                 order: "ASC"
    //             }
    //         ]
    //     }
    //     fetch('https://rpc.s0.t.hmny.io', {
    //         method: 'POST', headers: {
    //             'Content-Type': 'application/json'
    //             // 'Content-Type': 'application/x-www-form-urlencoded',
    //         }, body: JSON.stringify(r_data)
    //     })
    //         .then(response => response.json())
    //         .then(data => console.log(data));
    // }

}
export default HarmonyMethods;