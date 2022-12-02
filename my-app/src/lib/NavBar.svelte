<script>
    function home_button() {
        document.location = 'http://127.0.0.1:5173/';
    }

    function blog_button() {
        document.location = 'http://127.0.0.1:5173/blog';
    }

    function about_button() {
        document.location = 'http://127.0.0.1:5173/about';
    }
</script>

<div id="navbar">
    <!-- svelte-ignore a11y-click-events-have-key-events -->
    <h3 class="navbar-text" id="home" on:click={home_button}>WellHiIGuess</h3>
    <!-- svelte-ignore a11y-click-events-have-key-events -->
    <a class="navbar-text" id="blog" on:click={blog_button}>Blog</a>
    <!-- svelte-ignore a11y-click-events-have-key-events -->
    <a class="navbar-text" id="about" on:click={about_button}>About</a>
</div>

<style>
    .navbar-text {
        font-size: large;
        font-family: var(--font);
        color: white;
    }

    /* .button-text {
        background-color: #303133;
        padding: 5px;
        border-radius: 4px;
    } */
    
    #home {
        position: absolute;
        top: 26%;
        transform: translateY(-50%);
        left: 50px;
    }

    #blog {
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        right: 10%;
    }

    #about {
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        right: 25%;
    }
</style>
