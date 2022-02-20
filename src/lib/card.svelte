<script>
    export let title;
    
    export let text;
</script>

<div class="card">
    <div class="card-header">
        <h2>{title}</h2>
    </div>
    <p>{text}</p>
</div>

<style>

    .card-header {
        font-family: 'Roboto', sans-serif;
        text-align: center;
        background-color: #ff3c00;
        border-radius: 10px;
        color: #fff;
    }

    p {
        font-family: 'Roboto', sans-serif;
    }

    .card {
        height: 300px;
        width: 200px;
        border-radius: 15px;
        border: 1px solid black;
        padding: 0 15px 15px 15px;
        box-shadow: 2px 4px 4px rgba(0, 0, 0, 0.25);
    }
</style>