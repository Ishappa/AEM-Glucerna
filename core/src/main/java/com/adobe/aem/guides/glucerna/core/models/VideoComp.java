package com.adobe.aem.guides.glucerna.core.models;

import org.apache.sling.api.resource.Resource;
import org.apache.sling.models.annotations.DefaultInjectionStrategy;
import org.apache.sling.models.annotations.Model;
import org.apache.sling.models.annotations.injectorspecific.ValueMapValue;
import javax.annotation.PostConstruct;

@Model(adaptables = Resource.class,defaultInjectionStrategy = DefaultInjectionStrategy.OPTIONAL)
public class VideoComp {
    @ValueMapValue private String path;
    @ValueMapValue private String damVideoPath;
    private @ValueMapValue String videoPoster;
    @ValueMapValue private String brightcovePath;
    @ValueMapValue private String autoplay;
    @ValueMapValue private String rel;
    @ValueMapValue private String mute;
    @ValueMapValue private String loop;
    @ValueMapValue private String youtubeUrl;

    public String getPath() {
        return path;
    }

    public String getVideoPoster() {
        return videoPoster;
    }

    public String getDamVideoPath() {
        return damVideoPath;
    }

    public String getBrightcovePath(){
        return brightcovePath;
    }

    public String getYoutubeUrl() {
        return youtubeUrl;
    }

    public String getLoop() {
        return loop;
    }

    public String getAutoplay() {
        if(autoplay.equals("1")){
           return "autoplay";
        }
        return "";
    }

    public String getMute() {
        if(mute.equals("1")){
            return "muted";
        }
        return "";
    }

    @PostConstruct
    protected void init(){
        try {
            StringBuilder buildYoutubeUrl = new StringBuilder(youtubeUrl);
            buildYoutubeUrl.append("?autoplay=").append(autoplay).append("&rel=").append(rel).append("&mute=").append(mute);
            System.out.println(buildYoutubeUrl);
            youtubeUrl = buildYoutubeUrl.toString();
            System.out.println(youtubeUrl);
        }
        catch (Exception e){
            System.out.println(e.getMessage());
        }
    }
}
