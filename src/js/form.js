
// getting the size value from radio buttons
export function getCheckedValue( groupName ) {
    const radios = document.getElementsByName( groupName );    
    for( let i = 0; i < radios.length; i++ ) {
        if( radios[i].checked ) {
            return radios[i].value;
        }
    }
    return null;
}