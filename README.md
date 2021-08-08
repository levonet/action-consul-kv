# GitHub Action: Manipulate entries in the key/value store of a consul cluster

Manipulate entries in the key/value store of a consul cluster.

Allows the retrieval, addition, modification and deletion of key/value entries in a consul cluster via the agent.
The entire contents of the record, including the indices, flags and session are returned as `value`.

If the `key` represents a prefix then note that when a value is removed, the existing value if any is returned as part of the results.

See [KV Store](https://www.consul.io/api-docs/kv) for more details.

## Example usage

```yml
# TBD
```

## Inputs

## Outputs

# License

The scripts and documentation in this project are released under the [MIT License](LICENSE)
