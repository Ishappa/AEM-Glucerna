package com.adobe.aem.guides.glucerna.core.models;

import org.apache.sling.api.resource.Resource;
import org.apache.sling.models.annotations.DefaultInjectionStrategy;
import org.apache.sling.models.annotations.Model;
import org.apache.sling.models.annotations.injectorspecific.ValueMapValue;

@Model(adaptables = Resource.class,defaultInjectionStrategy = DefaultInjectionStrategy.OPTIONAL)
public class FooterFields {

    @ValueMapValue
    private String itemName;

    @ValueMapValue
    private String link;

    @ValueMapValue
    private String openInNewTab;

    public String getOpenInNewTab() {
        return openInNewTab;
    }

  
    public String getItemName() {
        return itemName;
    }

    public String getLink() {
        return link;
    }

}
