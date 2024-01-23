<script>
    import { format } from 'd3';
    import SportLabel from './SportLabel.svelte';
    export let player;


</script>

<div class="card">
    
    <div class="card-name">
        <div class="player-name">
            <span class="player-sport-label">{player.sport === "Auto_Racing" ? "Auto Racing" : player.sport}</span>
            <!-- <SportLabel sport={player.sport}/> -->
            <span class="player-name-label">{player.rank}. {player.name}</span>
        </div>
        <div class="player-earnings">
            <span class="player-earnings-label">TOTAL EARNINGS</span>
            <span class="player-earnings-value"><span class="dollar-sign">$</span>{format('.2s')(player.total_earnings)}</span>
        </div>
        
    </div>

    <div class="card-numbers">
        <div class="earning-type-container">
            <div class="on-field-container">
                <span class="on-field-value">${format('.2s')(player.on_the_field_earnings)}</span>
                <span class="on-field-label"> &nbsp;ON-THE-FIELD</span>
            </div>
            <div class="off-field-container">
                <span class="off-field-label">OFF-THE-FIELD &nbsp;</span>
                <span class="off-field-value">${format('.2s')(player.off_the_field_earnings)}</span>
            </div>
        </div>
        <div class="earning-type-bars">
            <div class="bar bar-1" style="width: {player.on_the_field_earnings/player.total_earnings*100}%;"></div>
            <div class="bar bar-2" style="width: {player.off_the_field_earnings/player.total_earnings*100}%;"></div>
        </div>
    </div>
</div>

<style>
    .card {
        display: flex;
        flex-direction: column;
        height: 180px;        
        /* box-shadow: rgba(0, 0, 0, 0.18) 0px 2px 4px; */
        background-color: white;        
    }

    .card-name {
        padding: 12px 28px;
        height: 40%;
        display: flex;
        justify-content: space-between;
    }

    .divider {
        width: 100%;
        height: 1px;
        background-color: lightgrey;
    }

    .card-numbers {
        padding: 12px 28px;
        flex-grow: 1;
        display: flex;
        flex-direction: column;
        gap: 8px;
        /* background-color: var(--background-gray); */
    }

    .player-name {
        display: flex;
        flex-direction: column;
        gap: 4px;
        justify-content: center;
        align-items: flex-start;
        padding-top: 16px;
    }

    .player-name span {
        display: inline-block;
    }
    .player-name-label {
        font-size: 28px;
        font-weight: 600;
        color: var(--label-dark-grey);
        font-family: "Open Sans", sans-serif;
        font-variation-settings:"wdth" 87.5;
    }
    .player-sport-label, .player-earnings-label {
        font-size: 12px;
        font-weight: 700;
        text-transform: uppercase;
        color: var(--label-light-grey);
        letter-spacing: 0.4px;
    }

    .player-earnings {
        display: flex;
        flex-direction: column;
        gap: 2px;
        justify-content: center;
        align-items: flex-end;
        text-align: right;
        position: relative;
        padding-top: 16px;
    }

    .dollar-sign {
        font-weight: 500;
        /* font-size: 18px; */
        /* position: absolute;
        left: 8px;
        top: 32px; */
    }

    .player-earnings span {
        display: inline-block;
    }
    .player-earnings-value {
        font-size: 28px;
        font-weight: 700;
        color: var(--label-dark-grey);
    }
  

    .earning-type-container {
        display: flex;
        justify-content: space-between;
        align-items: center;  
        gap: 20px;      
    }

    .on-field-container {
        color: var(--category-1);
        font-size: 12px;
        letter-spacing: 0.2px;
        font-weight: 600;

    }

    .on-field-value {
        font-weight: 700;
        font-size: 18px;
    }

    .off-field-container {
        color: var(--category-2);
        font-size: 12px;
        letter-spacing: 0.2px;
        font-weight: 600;
    }

    .off-field-value {
        font-weight: 700;
        font-size: 18px;
    }    

    .earning-type-bars {
        height: 8px;
        display: flex;
        justify-content: stretch;
        align-items: stretch;
        gap: 2px;
    }

    .bar-1 {
        background-color: var(--category-1);
        border-radius: 16px 0 0 16px;
    }

    .bar-2 {
        background-color: var(--category-2);
        border-radius: 0 16px 16px 0;
    }    
</style>