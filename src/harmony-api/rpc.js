class RPC {
    static hmyv2_getTransactionsCount = async function (address, type = "ALL") {
        var r_data = {
            id: 1,
            jsonrpc: "2.0",
            method: "hmyv2_getTransactionsCount",
            params: [
                address,
                type
            ],
        }
        const response = await fetch('https://rpc.s0.t.hmny.io', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(r_data)
        });
        return await response.json();
    }
    static hmyv2_getTransactionsHistory = async function (address, pageIndex, pageSize, fullTx, txType, order) {
        var r_data = {
            id: 1,
            jsonrpc: "2.0",
            method: "hmyv2_getTransactionsHistory",
            "params": [
                {
                    "address": address,
                    "pageIndex": pageIndex,
                    "pageSize": pageSize,
                    "fullTx": fullTx,
                    "txType": txType,
                    "order": order
                }
            ]
        }
        const response = await fetch('https://rpc.s0.t.hmny.io', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(r_data)
        });
        return await response.json();
    }
}
export default RPC;