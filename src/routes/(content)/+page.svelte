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

    @keyframes decor {
        to { 
            transform: scale(1.5);
            opacity: 0;
        }
    }

    img.decor {
        position: absolute;

        &:is(.clear) {
            animation-name: decor;
            animation-duration: 1s;
            animation-fill-mode: forwards;
            pointer-events: none;
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

<img class="decor" src="pointer-left.png" alt=""
    style:left="3ch"
    style:top="4ch"
    style:transform="scale(.5)"
    on:mouseenter={e => e.currentTarget.classList.add("clear")}
/>

<img class="decor" src="pointer-right.png" alt=""
    style:right="6ch"
    style:top="4ch"
    style:transform="scale(.75)"
    on:mouseenter={e => e.currentTarget.classList.add("clear")}
/>