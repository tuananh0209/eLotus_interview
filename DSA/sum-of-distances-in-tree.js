/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {number[]}
 */
var sumOfDistancesInTree = function (n, edges) {
    //init object { node: [child1, child2], ...}
    let tree = {};
    edges.forEach(value => {
        if (tree[value[0]] && tree[value[0]].length) {
            tree[value[0]].push(value[1]);
        } else {
            tree[value[0]] = [value[1]];
        }

        if (tree[value[1]] && tree[value[1]].length) {
            tree[value[1]].push(value[0]);
        } else {
            tree[value[1]] = [value[0]];
        }
    })

    let count = [...Array(n)].fill(1),
        result = [...Array(n)].fill(0);
    
    //use Depth First Search to rosolve
    let rs = dfs1(tree, 0, null, count, result);
    count = rs.count;
    result = rs.result;
    rs = dfs2(tree, 0, null, count, result);
    return rs.result;
};

const dfs1 = (tree, node, parent = null, count, result) => {
    tree[node]?.forEach(value => {
        if (value != parent) {
            let rs = dfs1(tree, value, node, count, result);
            count = rs.count;
            result = rs.result;
            count[node] += count[value];
            result[node] += result[value] + count[value];
        }
    })
    return { count, result };
}

const dfs2 = (tree, node, parent = null, count, result) => {
    tree[node]?.forEach(value => {
        if (value != parent) {
            result[value] = result[node] - count[value] + count.length - count[value];
            let rs = dfs2(tree, value, node, count, result);
            count = rs.count;
            result = rs.result;
        }
    })
    return { count, result };
}
