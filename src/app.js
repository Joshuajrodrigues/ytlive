import React from "react"
import {Grid} from "@material-ui/core"
import{SearchBar, VideoDetails, VideoList} from './components'
import youtube from "./api/youtube"

 class App extends React.Component{
     state ={
         videos: [],
         selectedVideo:null
     }
     onVideoSelect =(video)=>{
         this.setState({selectedVideo:video})
     }
     handleChange = async (searchTerm)=>{
         const response= await youtube.get("search",{
            params: {
                part:"snippet",
                key:"AIzaSyAYDx8imB7PesnnRObolzC8mpZlxRsshsU",
                eventType:"live",
                type:"video",
                maxResults:"10",
                q: searchTerm,
            }
         });
         this.setState({
             videos: response.data.items,
             selectedVideo:response.data.items[0]
            
            })
            

     }
    componentDidMount(){
        this.handleChange('Sunday Mass Goa')
    }
    render(){
        const {selectedVideo, videos}= this.state
        console.log(selectedVideo)
        return(
            <>
                <Grid justify="center" container spacing={10} >
                    
                    <Grid item xs={12}>
                        
                        <Grid container spacing={10}>
                            
                            <Grid item xs={12}>
                                <SearchBar onFormSubmit={this.handleChange}/>
                            </Grid>
                            <Grid item xs={8}>
                                <VideoDetails video={selectedVideo}/>
                            </Grid>
                            <Grid item xs={4}>
                                <VideoList videos={videos} onVideoSelect={this.onVideoSelect}/>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            
            </>
        )
    }
}
export default App