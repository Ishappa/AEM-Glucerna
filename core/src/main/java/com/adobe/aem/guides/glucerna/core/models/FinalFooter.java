package com.adobe.aem.guides.glucerna.core.models;

import org.apache.sling.api.resource.Resource;
import org.apache.sling.models.annotations.DefaultInjectionStrategy;
import org.apache.sling.models.annotations.Model;
import org.apache.sling.models.annotations.injectorspecific.ChildResource;
import org.apache.sling.models.annotations.injectorspecific.ValueMapValue;

import java.util.List;

@Model(adaptables = Resource.class,defaultInjectionStrategy = DefaultInjectionStrategy.OPTIONAL)
public class FinalFooter {

    @ChildResource
    List<IconFields> fields;

    @ChildResource
    List<PolicyFields> field1;

    @ValueMapValue
    private String file;

    @ValueMapValue
    private String link;

    @ValueMapValue
    private String alt;

    @ValueMapValue
    private String text;

    @ValueMapValue
    private String copyRight;

    public List<IconFields> getFields() {
        return fields;
    }

    public List<PolicyFields> getField1() {
        return field1;
    }

    public String getFile() {
        return file;
    }

    public String getText() {
        return text;
    }

    public String getCopyRight() {
        return copyRight;
    }
    public String getLink() {
        return link;
    }
    public String getAlt() {
        return alt;
    }
}
