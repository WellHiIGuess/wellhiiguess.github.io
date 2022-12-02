<script>
  import NavBar from "./NavBar.svelte";

</script>

<div>
    <NavBar />
    <div id="links">
        <a href="https://github.com/WellHiIGuess"><img src="githublogo.jpeg" alt="github" /></a>
        <h2 class="link-text"><a href="https://github.com/WellHiIGuess">GitHub - WellHiIGuess</a></h2>
        <a href="https://wellhiiguess.itch.io/"><img src="itchlogo.png" alt="itch" /></a>
        <h2 class="link-text"><a href="https://wellhiiguess.itch.io/">Itch - WellHiIGuess</a></h2>
        <a href="https://twitter.com/benjaminwolf122"><img src="twitterlogo.png" alt="twitter" /></a>
        <h2 class="link-text"><a href="https://twitter.com/benjaminwolf122">Twitter(if it survives) - @benjaminwolf122</a></h2>
        <a href="https://www.youtube.com/channel/UCAi6-0Vrel-qMorUBobNa5Q"><img src="youtubelogo.png" alt="youtube" /></a>
        <h2 class="link-text"><a href="https://www.youtube.com/channel/UCAi6-0Vrel-qMorUBobNa5Q">Youtube - WellHiIGuess 23</a></h2>
    </div>
</div>

<style>
    .link-text{
        font-family: var(--font);
        color: white;
    }

    #links {
        position: relative;
        top: 150px;
        margin: auto;
        text-align: center;
        width: 100%;
        height: 100px;
    }

    img {
        max-width: 50px;
    }

    a:link, a:visited {
        color: white;
    }
    a:hover {
        color: white;
    }
</style>
