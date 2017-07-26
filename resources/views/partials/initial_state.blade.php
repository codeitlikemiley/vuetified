<script>
    window.App = {!! json_encode(array_merge(
        Vuetified::scriptVariables(), [
            // Add Key and Value Here You Want to Added to Initial State
        ]
    ))!!}
</script>