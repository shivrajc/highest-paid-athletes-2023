<script>
    import { data } from '../../data/data';
    import Tooltip from './Tooltip.svelte';

    let hover = null;
    let hoverCoordinates = null;

    const sports = ["Basketball", "Golf", "Football", "Soccer", "Boxing", "Auto_Racing", "Tennis", "Baseball"];

    function handleHover(player, event) {
        hover = player;
        hoverCoordinates = event;
    }    
</script>

<div class="dot-plot">
    <div class="header"><p>Athlete Count and Rank by Sport <span class="legend"> &nbsp;(<span class="category-1-dot">&#11044;</span> Off-the-Field > On-the-Field)</span></p></div>
    {#each sports as sport}
        <div class="sport-row">
            <div class="sport-header"><p>{sport === "Auto_Racing" ? "Auto Racing" : sport}</p></div>
            <div class="player-count"><p>{$data.filter(d => d.sport === sport).length}</p></div>
            <div class="player-dots">
                {#each $data.filter(d => d.sport === sport) as player}
                    <div 
                        class="player-dot"                         
                        style="background-color: {player.on_the_field_earnings < player.off_the_field_earnings ? "var(--highlight-2)" : "var(--highlight-3)"}; color: {player.on_the_field_earnings < player.off_the_field_earnings ? "white" : "black"};"
                        class:hovered={hover ? hover.name === player.name : null}
                        on:mouseover={(e) => handleHover(player, e)}
                        on:mouseout={() => hover = null}
                    >
                        <span>{player.rank}</span>
                    </div>
                {/each}
            </div>
        </div>
    {/each}

</div>
<!-- {#if hover}
<Tooltip player={hover} {hoverCoordinates} />        
{/if}   -->

<style>
    .dot-plot {
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: flex-start;
        gap: 12px;
        padding: 28px 40px 40px 40px;
        width: 100%;
        position: relative;
    }

    .category-1-dot {
        color: var(--highlight-2);
    }

    .legend {
        font-size: 12px;
        font-weight: 600;
        color: var(--label-dark-grey);
        text-transform: uppercase;
        letter-spacing: 0.4px;
    }

    .header {
        font-size: 20px;
        font-weight: bold;
    }

    .sport-row {
        display: flex;
        justify-content: stretch;
        align-items: center;
        gap: 20px;
        height: 32px;
    }

    .sport-header {
        width: 90px;
        font-size: 16px;
        font-weight: 500;
        color: var(--label-dark-grey);
        text-wrap: nowrap;
    }

    .player-count {
        width: 40px;
        text-align: right;
        padding-right: 16px;
        font-weight: bold;
        font-size: 18px;
        color: var(--label-dark-grey);
    }

    .player-dots {
        display: flex;
        justify-content: flex-start;
        align-items: center;
        gap: 2px;
    }

    .player-dot {
        width: 28px;
        height: 28px;
        border-radius: 50%;
        /* background-color: blue; */
        /* color: white; */
        display: flex;
        justify-content: center;
        align-items: center;
        text-align: center;
        font-size: 12px;
        font-weight: 600;
        border: 1px solid var(--label-light-grey);
    }

    span {
        pointer-events: none;
    }

    .hovered {
        border: 2px solid black;
        opacity: 0.8;
        cursor: pointer;
    }
</style>