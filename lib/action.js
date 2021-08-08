async function run(core) {
    const state = core.getInput('state', {required: true})
    const key = core.getInput('key', {required: true})
    const value = core.getInput('value')
    const host = core.getInput('host', {required: true})
    const port = core.getInput('port', {required: true})
    const scheme = core.getInput('scheme', {required: true})
    const dc = core.getInput('dc')
    const token = core.getInput('token')
    const recurse = core.getInput('recurse')
    const retrieve = core.getInput('retrieve')

    console.log(`state: ${state}`)
    console.log(`key: ${key}`)
    console.log(`value: ${value}`)
    console.log(`host: ${host}`)
    console.log(`port: ${port}`)
    console.log(`scheme: ${scheme}`)
    console.log(`dc: ${dc}`)
    console.log(`token: ${token}`)
    console.log(`recurse: ${recurse}`)
    console.log(`retrieve: ${retrieve}`)

    console.log(JSON.stringify({state, key, value, host, port, scheme, dc, token, recurse, retrieve}))

    // core.setOutput('data', data)
    // core.setOutput('changed', changed)
}

module.exports = {
    run
}
