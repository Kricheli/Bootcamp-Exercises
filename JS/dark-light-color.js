let color = 'YELLOW';
color = color.toLocaleLowerCase();
switch (color){
        case 'pink':
        case 'orange':
        case 'yellow':
        console.log('light color');
        break;

        case 'blue':
        case 'purple':
        case 'brown':
        console.log('dark color');
        break;
        default:
        console.log('unknown');
}
