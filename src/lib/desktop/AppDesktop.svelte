<script>
    import { data } from "../../data/data";
    import {scaleLinear, scaleBand, scaleSqrt, range, extent, max, format} from 'd3';    
    import Header from "./Header.svelte";
    import ScatterPlot from "./ScatterPlot.svelte";
  import PlayerCard from "./PlayerCard.svelte";
  import DotPlot from "./DotPlot.svelte";
  import Footer from "./Footer.svelte";




        
</script>

<main>
    <Header />
    <div class="main-container">
        <div class="viz-container">
            <div class="scatter-plot">
                <div class="scatter-plot-header">On-the-Field Earnings vs. Off-the-Field Earnings</div>
                <ScatterPlot width={620} height={640}/>
            </div>
            <div class="dot-plot">
                <DotPlot />
            </div>            
        </div>            
        <div class="card-container">
            <div class="card-filters"></div>
            <div class="cards">
                {#each $data as d}
                    <div class="card">
                        <PlayerCard player={d} />
                    </div>
                {/each}
            </div>

        </div>
    
    </div>    
    <div class="footer">
        <Footer />
    </div>
</main>

<style>
    main {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: stretch;
        padding: 20px;
        position: relative;
        text-align: left;
        gap: 20px;
        max-width: 1400px;
        /* max-height: 1000px; */
    }

    .footer {
        height: 50px;
        /* width: 100%; */
        background-color: white;
        display: flex;
        justify-content: flex-start;
        align-items: center;
        padding: 0 40px 0 40px;
    }

    .main-container {
        display: flex;
        justify-content: center;
        align-items: stretch;
        gap: 20px;
    }

    .card-container {        
        /* background-color: white; */
        width: 100%;
        max-height: 1294px;
        overflow-y: scroll;
        padding: 0px 8px 0 0;
    }
    
    .cards {
        display: flex;
        flex-direction: column;
        gap: 20px;      
    }

    .viz-container {
        /* width: 1000px; */
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: center;
        gap: 20px;
        /* background-color: white; */

    }

    .dot-plot {
        background-color: white;
        width: 100%;
        position: relative;
    }

    .scatter-plot {
        background-color: white;
        display: flex;
        flex-direction: column;
        padding: 40px;
    }

    .scatter-plot-header {
        font-size: 20px;
        font-weight: bold;
    }

    svg {
        /* border: 1px solid; */
        /* transform: rotate(-45deg); */
        /* transform: translate(0, 400); */
        
    }

   text {
    text-anchor: middle;
    /* transform: rotate(45deg); */
    transform-origin: center;
   }
</style>