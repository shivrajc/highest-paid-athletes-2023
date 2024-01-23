<script>
    import { data } from "../../data/data";
    import {scaleLinear, scaleBand, scaleSqrt, range, extent, max, format} from 'd3';    
    import Tooltip from "./Tooltip.svelte";
    import tippy from 'tippy.js';
	import 'tippy.js/dist/tippy.css';
	// import 'tippy.js/themes/material.css';

    export let width;
    export let height;    

    let hover = null;
    let hoverCoordinates = null;

    const maxEarnings = 110000000;
    const rAlignArray = ["Cristiano Ronaldo", "Lionel Messi", "LeBron James", "Stephen Curry", "Roger Federer", "Kevin Durant", "Neymar", "Russell Wilson", "Tiger Woods", "Tom Brady"];
    const lAlignArray = ["Kylian Mbappé", "Dustin Johnson"];


    $: margin = {top: 20, right: 0, bottom: 40, left: 40};
    $: boundedWidth = width - margin.left - margin.right;
    $: boundedHeight = height - margin.top - margin.bottom;

    $: xScale = scaleLinear()
        .domain([0, maxEarnings])
        .range([0, boundedWidth]);    

    $: yScale = scaleLinear()
        .domain([0, maxEarnings])
        .range([boundedHeight, 0]);

    $: rScale = scaleSqrt()
        .domain(extent($data, d => d.total_earnings))
        .range([8, 20]);


    function handleHover(player, event) {
        hover = player;
        hoverCoordinates = event;
    }
        
</script>

<div class="viz">
    <svg {width} {height}>    
        <g transform="translate({margin.left}, {margin.top})">
            <g>
                {#each range(0, 110000001, 10000000) as tick, i}
                    <g >
                        <line x1="{xScale(tick)}" x2="{xScale(tick)}" y1="0" y2="{boundedHeight}" stroke="black" />
                    </g>
                    <g >
                        <text class="x-axis-label axis-label" x="{xScale(tick)}" y="{boundedHeight+20}">{tick === 0 ? "" : format(".2s")(tick)}</text>
                    </g>                
                {/each}
            </g>
            <g>
                {#each range(0, 110000001, 10000000) as tick, i}
                    <g >
                        <line x1="0" x2="{boundedWidth}" y1="{yScale(tick)}" y2="{yScale(tick)}" stroke="black" />
                    </g>
                    <g >
                        <text class="y-axis-label axis-label" x="{-10}" y="{tick === 0 ? yScale(tick)+8 : yScale(tick)}">{tick === 0 ? format("#")(tick) : format(".2s")(tick)}</text>
                    </g>                
                {/each}
            </g>            
            <g>
                {#each $data as d(d.name)}
                    <circle 
                        cx={xScale(d.on_the_field_earnings)}
                        cy={yScale(d.off_the_field_earnings)}
                        r={rScale(d.total_earnings)}                        
                        class="dots"
                        class:hovered={hover ? hover.name === d.name : null}
                        on:mouseover={(e) => handleHover(d, e)}
                        on:mouseout={() => hover = null}
                    />
                    <text
                        x={xScale(d.on_the_field_earnings) + rScale(d.total_earnings)+2}
                        y={yScale(d.off_the_field_earnings) + rScale(d.total_earnings) }                        
                        class="dot-label"                        
                    >
                        {rAlignArray.includes(d.name) ? d.name : ""}
                    </text>
                    <text
                        x={xScale(d.on_the_field_earnings) - rScale(d.total_earnings) - 90}
                        y={yScale(d.off_the_field_earnings) - rScale(d.total_earnings) + 16 }                        
                        class="dot-label"                        
                    >
                        {lAlignArray.includes(d.name) ? d.name : ""}
                    </text>
                {/each}
            </g>
            <text
                x={-boundedHeight}
                y={-50}
                class="y-axis-title"
            >
                Off-the-Field Earnings &nbsp;&#8594;
            </text>
            <text
                x={0}
                y={height-10}
                class="x-axis-title"        
            >
                On-the-Field Earnings &nbsp;&#8594;
            </text>
        </g>
    </svg> 
    {#if hover}
        <Tooltip player={hover} {hoverCoordinates} />        
    {/if}     
</div>


<style>
    .dot-label {
        font-size: 12px;
        fill: var(--label-light-grey);
    }

    .y-axis-title {
        transform: rotate(-90deg);
        text-transform: uppercase;
        font-size: 12px;
        font-weight: 600;
        letter-spacing: 0.6px;
        fill: var(--label-light-grey);
    }

    .x-axis-title {
        text-transform: uppercase;
        font-size: 12px;
        font-weight: 600;
        letter-spacing: 0.6px;
        fill: var(--label-light-grey);
    }

    .viz {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        padding: 20px;
    }

    svg {
        /* border: 1px solid; */
        /* transform: rotate(-45deg); */
        /* transform: translate(0, 400); */
        overflow: visible;
        
    }

    .x-axis-label {
        text-anchor: middle;
    }

    .y-axis-label {
        text-anchor: end;
        /* text-align: right; */
        dominant-baseline: middle;
    }

    .axis-label {
        font-size: 12px;
        fill: var(--label-dark-grey);
    }

   line {
    stroke: rgb(183, 183, 183);
   }

   .dots {
    fill: hsl(204, 16%, 25%);
    opacity: 0.6;
   }

   .hovered {
    stroke: black;
    stroke-width: 2px;
    fill: var(--highlight-1);
    cursor: pointer;
   }
</style>