import React from "react"
import { Paper, Typography } from "@material-ui/core"

function VideoDetails({video}){
    if (!video) return <div>Loading</div>

    const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`
    console.log(videoSrc)
    return(
        <React.Fragment>
            <Paper elevation={6} style={{height:"70%"}}>
                <iframe frameBorder="0" height="100%" width="100%" title="videoPlayer" src={videoSrc}></iframe>
            </Paper>
            <Paper elevation={6}>
                <Typography variant="h4">  {video.snippet.title}  </Typography>
                <Typography variant="subtitle1"> {video.snippet.channelTitle} </Typography>
    
                
            </Paper>

        </React.Fragment>
    )
}
export default VideoDetails