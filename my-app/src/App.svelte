<script lang="ts">
  import { Router, Route } from 'svelte-routing'
  import BlogGet from './lib/BlogGet.svelte';
  import Blog from './lib/Blog.svelte';
  import Home from './lib/Home.svelte';
  import About from './lib/About.svelte';
</script>

<Router>
  <Route component={Home} path="/" />
  <Route component={Blog} path="/blog" />
  <Route component={About} path="/about" />
  <Route component={BlogGet} path="/blog-get" />
</Router>

<style>
</style>