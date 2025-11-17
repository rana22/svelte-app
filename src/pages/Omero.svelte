<script lang="ts">
    import {
        OMERO_BASE,
        omeroLoginUrl,
        iviewerUrlForImage,
        thumbnailUrl,
    } from "../lib/omero";

    // optional: pass ?imageId=123 via hash query string, default to 123
    let imageId = 123;

    // after users return from OMERO login, they’ll land back at this route (#/omero)
    const returnTo = `${window.location.origin}${window.location.pathname}#/omero`;

    function signIn() {
        window.location.href = omeroLoginUrl(returnTo);
    }

    function signInToOmeroDev() {
        // Goes to: https://nife-dev.cancer.gov/omero_plus/login/?url=%2Fmetadata%2F
        const login = new URL('https://nife-dev.cancer.gov/omero_plus/login/');
        login.searchParams.set('url', '/omero_plus/return-to-external');
        console.log(login.toString());
        window.location.href = login.toString();
    }

    let showViewer = false;

    function openViewer() {
        showViewer = true;
    }

    function onImageIdInput(e: Event) {
        const v = Number((e.target as HTMLInputElement).value);
        if (!Number.isNaN(v)) imageId = v;
    }
</script>

<div class="page">
    <section class="omero">
        <header class="header">
            <h1>OMERO Access</h1>
            <p>Sign in to OMERO, then view images directly below.</p>
        </header>

        <div class="actions">
            <button class="btn primary" on:click={signInToOmeroDev}
                >Sign in to OMERO</button
            >

            <div class="image-id">
                <label for="imageId">Image ID:</label>
                <input
                    id="imageId"
                    type="number"
                    min="1"
                    value={imageId}
                    on:input={onImageIdInput}
                />
                <button class="btn" on:click={openViewer}>Open Viewer</button>
            </div>
        </div>

        <div class="preview">
            <div class="thumb">
                <img
                    src={thumbnailUrl(imageId)}
                    alt={"OMERO thumbnail " + imageId}
                />
                <small>Thumbnail via {OMERO_BASE}/webgateway</small>
            </div>
        </div>

        {#if showViewer}
            <div class="viewer">
                <iframe
                    title="OMERO iviewer"
                    src={iviewerUrlForImage(imageId)}
                    referrerpolicy="no-referrer"
                    allowfullscreen
                />
            </div>
        {/if}

        <footer class="note">
            <small>
                Tip: If the viewer asks you to log in again, complete OMERO
                login and return to this page. The OMERO session cookie is
                managed by the server under <code>{OMERO_BASE}</code>.
            </small>
        </footer>
    </section>
</div>

<style>
    .omero {
        max-width: 960px;
        margin: 2rem auto;
        padding: 0 1rem;
    }
    .header h1 {
        margin: 0 0 0.25rem;
    }
    .actions {
        display: flex;
        flex-wrap: wrap;
        gap: 0.75rem;
        align-items: center;
        margin: 1rem 0;
    }
    .image-id {
        display: flex;
        gap: 0.5rem;
        align-items: center;
    }
    .image-id input {
        width: 8rem;
        padding: 0.4rem 0.5rem;
    }
    .btn {
        padding: 0.55rem 0.85rem;
        border-radius: 0.5rem;
        border: 1px solid #e2e2e6;
        background: #fff;
        cursor: pointer;
    }
    .btn.primary {
        background: #111827;
        color: #fff;
        border-color: #111827;
    }
    .btn:hover {
        filter: brightness(0.97);
    }
    .preview {
        margin: 1rem 0;
    }
    .thumb img {
        width: 200px;
        height: 150px;
        object-fit: cover;
        border-radius: 0.5rem;
        border: 1px solid #e5e7eb;
    }
    .viewer {
        margin-top: 1rem;
        border: 1px solid #e5e7eb;
        border-radius: 0.5rem;
        overflow: hidden;
    }
    .viewer iframe {
        display: block;
        width: 100%;
        height: 70vh;
        border: 0;
    }
    .note {
        margin-top: 1rem;
        color: #6b7280;
    }
    code {
        background: #f3f4f6;
        padding: 0.1rem 0.3rem;
        border-radius: 0.25rem;
    }
</style>
