package com.adobe.aem.guides.glucerna.core.models;

import org.apache.sling.api.resource.Resource;
import org.apache.sling.models.annotations.DefaultInjectionStrategy;
import org.apache.sling.models.annotations.Model;
import org.apache.sling.models.annotations.injectorspecific.ValueMapValue;

@Model(adaptables = Resource.class, defaultInjectionStrategy = DefaultInjectionStrategy.OPTIONAL)
public class IconFields {

    @ValueMapValue
    private String file;

    @ValueMapValue
    private String link;

    // @ValueMapValue
    // private String openInNewTab;

    // public String getOpenInNewTab() {
    //     return openInNewTab;
    // }

    @ValueMapValue
    private String alt;

    public String getFile() {
        return file;
    }
    public String getLink() {
        return link;
    }
    public String getAlt() {
        return alt;
    }

}
