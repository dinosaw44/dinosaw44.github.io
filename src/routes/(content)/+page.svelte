<style lang=scss>
    hgroup {
        display: flex;
        gap: 1rem;
        padding: 20ch 0 0 20ch;
        
        h1 {
            padding-top: 2rem;
        }

        p {
            color: var(--accent);
            text-align: right;
        }
    }

    .img-wrapper {
        border: solid 3px var(--accent);
        border-radius: 50%;
        overflow: hidden;
        width: 8rem;

        img {
            width: inherit;
            transform: scale(1.2);
        }
    }
</style>

<div style:display="inline-block">
    <hgroup>
        <span class="img-wrapper">
            <img src="duck.png" alt="" />
        </span>
        <span>
            <h1>Under construction!</h1>
            <p>Work in progress...</p>
        </span>
    </hgroup>
</div>