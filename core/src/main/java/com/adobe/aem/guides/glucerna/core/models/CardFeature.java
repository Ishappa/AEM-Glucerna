package com.adobe.aem.guides.glucerna.core.models;

import org.apache.sling.api.resource.Resource;
import org.apache.sling.models.annotations.DefaultInjectionStrategy;
import org.apache.sling.models.annotations.Model;
import org.apache.sling.models.annotations.injectorspecific.ValueMapValue;
import java.util.Random;

@Model(adaptables = Resource.class,defaultInjectionStrategy = DefaultInjectionStrategy.OPTIONAL)
public class CardFeature {
    private @ValueMapValue String featureTitle;
    private @ValueMapValue String poster;
    private @ValueMapValue String select;
    private @ValueMapValue String pdfpath;
    private @ValueMapValue String isSameTab;
    private Random rand = new Random();
    private  String uniqueId=""+rand.nextInt();

    public String getFeatureTitle() {
        return featureTitle;
    }

    public String getPoster() {
        return poster;
    }

    public String getSelect() {
        return select;
    }

    public String getPdfpath() {
        return pdfpath;
    }

    public String getIsSameTab() {
        return isSameTab;
    }
    public String getUniqueId(){
        return uniqueId;
    }
}
