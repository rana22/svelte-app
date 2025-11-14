<script lang="ts">
  import Omero from "./pages/Omero.svelte";
  import Home from "./pages/Home.svelte"; // your existing landing component

  let route = window.location.hash || "#/";

  function onHashChange() {
    route = window.location.hash || "#/";
  }

  // keep hash-based routing simple for static hosting
  if (typeof window !== "undefined") {
    window.addEventListener("hashchange", onHashChange);
  }
</script>

{#if route === "#/"}
  <Home />
{:else if route.startsWith("#/omero")}
  <Omero />
{/if}

<style>
  .nav {
    display: flex;
    gap: 1rem;
    padding: 1rem;
    border-bottom: 1px solid #eee;
  }
  .nav a {
    text-decoration: none;
    color: #111827;
  }
  .nav a:hover {
    text-decoration: underline;
  }
</style>
