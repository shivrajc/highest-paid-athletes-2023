<script>
  import PlayerCard from "./PlayerCard.svelte";
  import { format } from 'd3';

    export let player;
    export let hoverCoordinates;
</script>

<div class="tooltip" style="position:absolute; top:{hoverCoordinates.clientY}px; left:{hoverCoordinates.clientX-300}px">
    <!-- <PlayerCard {player} /> -->
    <p class="main-text">{player.rank}. {player.name}</p>
    <p class="sub-text">Sport: <span>{player.sport}</span></p>
    <p class="sub-text">Total Earnings: <span>${format('.2s')(player.total_earnings)}</span></p>
    <p class="sub-text">On-the-Field Earnings: <span>${format('.2s')(player.on_the_field_earnings)}</span></p>
    <p class="sub-text">Off-the-Field Earnings: <span>${format('.2s')(player.off_the_field_earnings)}</span></p>
</div>

<style>
    .tooltip {
        padding: 16px;
        pointer-events: none;
        transition: top 300ms, left 300ms;
        width: fit-content;
        background: white;
        border-radius: 4px;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: flex-start;
        gap: 4px;
        box-shadow: rgba(0, 0, 0, 0.25) 0px 0.0625em 0.0625em, rgba(0, 0, 0, 0.25) 0px 0.125em 0.5em, rgba(255, 255, 255, 0.1) 0px 0px 0px 1px inset;
    }

    p {
        margin: 0;
        padding: 0;
        text-align: left;
    }

    .main-text {
        font-size: 1.4rem;
        font-weight: bold;
        margin-bottom: 8px;
    }

    .sub-text {
        font-size: 18px;
        font-weight: 500;
    }

    span {
        font-weight: bold;
        font-size: 20px;
    }
</style>
