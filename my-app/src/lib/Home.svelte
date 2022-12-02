<script>
  import NavBar from "./NavBar.svelte";

</script>

<div>
  <NavBar />
  <div id="home-text">
    <h1 class="text">Hello,</h1>
    <p class="text">I'm WellHiIGuess. You probably know me from nothing and if you do know me from something you're lying. But I do a lot of things mainly programming. No no I shouldn't write that, that sounds stupid. Ok lets start over.</p>
    <h1 class="text">Hello,</h1>
    <p class="text">I'm WellHiIGuess and I'm better than you in every way- no no that's too forward and probably not true. Maybe I shouldn't introduce myself. I mean I really don't know what to put here. Hmmmmmmmmmm. HMMMMMMMMMMMMMMMMMMMMMMM.</p>
  </div>

  <h1 class="text" id="well-hi">Well Hi I Guess</h1>
</div>

<style>
  .text {
    color: white;
    font-family: var(--font);
    width: 90%;
  }

  #home-text {
    position: absolute;
    top: 90px;
    left: 10%;
  }

  #well-hi {
    position: absolute;
    top: 90%;
    font-size: 90px;
  }
</style>
