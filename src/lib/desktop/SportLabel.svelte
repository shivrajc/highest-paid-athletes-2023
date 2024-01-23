<script>
    export let sport;    
    let src;
    import Baseball from '../../assets/Baseball.svg';
    import Football from '../../assets/Football.svg';
    import Tennis from '../../assets/Tennis.svg';
    import Auto_Racing from '../../assets/Auto_Racing.svg';
    import Golf from '../../assets/Golf.svg';
    import Boxing from '../../assets/Boxing.svg';
    import Soccer from '../../assets/Soccer.svg';
    import Basketball from '../../assets/Basketball.svg';

    if (sport === "Baseball") src=Baseball
    else if (sport === "Football") src=Football
    else if (sport === "Tennis") src=Tennis
    else if (sport === "Auto_Racing") src=Auto_Racing
    else if (sport === "Golf") src=Golf
    else if (sport === "Boxing") src=Boxing
    else if (sport === "Soccer") src=Soccer
    else if (sport === "Basketball") src=Basketball
</script>

<div class="sports-label">
    <img {src} alt="{sport} Icon">
    <span class="label">{sport}</span>
</div>

<style>
    .sports-label {
        display: flex;
        justify-content: flex-start;
        align-items: center;
        gap: 4px;
    }

    img {
        width: 12px;
        fill: var(--label-light-grey);
    }

    span {
        font-size: 12px;
        font-weight: 700;
        text-transform: uppercase;
        color: var(--label-light-grey);
        letter-spacing: 0.4px;        
    }
</style>