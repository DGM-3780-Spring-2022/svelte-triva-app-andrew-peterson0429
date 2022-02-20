<script>
    import { revealed } from '/src/routes/stores.js';

    function reveal() {
        revealed.update((n) => !n);
    }
</script>

<button on:click|preventDefault|once={reveal}>Reveal Answer</button>


<style>
    button {
        display: block;
        margin: 0 auto;
        margin: 50px;
        border: none;
        background-color: #ff3c00;
        color: #fff;
        border-radius: 5px;
        font-family: 'Roboto', sans-serif;
        padding: 10px;
    }

    button:hover {
        cursor: pointer;
    }
</style>