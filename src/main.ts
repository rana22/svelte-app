import './app.css';
import App from './App.svelte';
import { mount } from 'svelte';

// Svelte 5:
mount(App, {
  target: document.getElementById('app')!, // or '#app'
  // props: { ... } // optional
});