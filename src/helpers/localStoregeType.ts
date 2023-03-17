// This fuction is used to add type to localstorage

export const LocalStorageService = () => {

    const getItem = <T>(item: string): T | null => {
        const data: string | null = localStorage.getItem(item)

        console.log(data)

        console.log(data)
        if( data !== null ) {
            // console.log( JSON.parse(data) )
            // obj = <T>JSON.parse(data)
            
            return JSON.parse(data) 
        }
        return null;
    }
    
    const setItem = <T>(key: string, value: T):void => {
        localStorage.setItem(key, JSON.stringify({ value }))
    }
    return {
        getItem, 
        setItem
    }

}