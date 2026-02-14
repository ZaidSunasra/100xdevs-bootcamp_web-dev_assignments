
// Problem Description – Recursive Fetch with Redirect Handling

// You are required to fetch data for a given set of IDs. 
// Each response may contain a redirectId, indicating that the data should be fetched again using the new ID. 
// The process must continue until the final data is reached. 
// Your implementation should also detect and prevent infinite redirect loops.

async function fetchDeep(ids, fetcher, maxDepth = 5) {

    const entries = Object.entries(ids);
    const output = {};

    const resultArrays = await Promise.all(
        entries.map(async ([key, value]) => {
            let currentId = value;
            let depth = 0;

            let result = await fetcher(currentId);

            while (result.redirectId) {
                if (depth >= maxDepth) {
                    throw new Error("Max redirect depth exceeded");
                }
                result = await fetcher(result.redirectId);
                depth++;
            }
            return [key, result]
        })
    )

    for(const [key, value] of resultArrays){
        output[key] = value;
    }

    return output;
    
}

module.exports = fetchDeep;
