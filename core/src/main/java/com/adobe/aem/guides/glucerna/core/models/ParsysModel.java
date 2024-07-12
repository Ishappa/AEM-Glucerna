package com.adobe.aem.guides.glucerna.core.models;

import org.apache.sling.api.resource.Resource;
import org.apache.sling.models.annotations.DefaultInjectionStrategy;
import org.apache.sling.models.annotations.Model;
import org.apache.sling.models.annotations.injectorspecific.ValueMapValue;

import java.util.ArrayList;
import java.util.List;

@Model(adaptables = Resource.class, defaultInjectionStrategy = DefaultInjectionStrategy.OPTIONAL)
public class ParsysModel {

    @ValueMapValue
    private String parsys;

    @ValueMapValue(name = "tworatios")
    private String twoRatios;

    @ValueMapValue(name = "threeratios")
    private String threeRatios;

    @ValueMapValue(name = "fourratios")
    private String fourRatios;

    @ValueMapValue(name = "fiveratios")
    private String fiveRatios;

    @ValueMapValue(name = "id")
    private String id;

    @ValueMapValue(name = "variation")
    private String variation;

    public String getParsys() {
        return parsys;
    }

    public String getId() {
        return id != null ? id : "defaultParsysId";
    }

    public String getVariation() {
        return variation;
    }

    public String getTwoRatios() {
        return twoRatios != null ? twoRatios : "6:6";
    }

    public List<Integer> getTwoRatiosList() {
        return parseRatios(getTwoRatios());
    }

    public String getThreeRatios() {
        return threeRatios != null ? threeRatios : "4:4:4"; 
    }

    public List<Integer> getThreeRatiosList() {
        return parseRatios(getThreeRatios());
    }

    public String getFourRatios() {
        return fourRatios != null ? fourRatios : "3:3:3:3"; 
    }

    public List<Integer> getFourRatiosList() {
        return parseRatios(getFourRatios());
    }

    public String getFiveRatios() {
        return fiveRatios != null ? fiveRatios : "2:2:2:2:2";
    }

    public List<Integer> getFiveRatiosList() {
        return parseRatios(getFiveRatios());
    }

    private List<Integer> parseRatios(String ratios) {
        List<Integer> ratioList = new ArrayList<>();
        String[] ratioArray = ratios.split(":");
        for (String ratio : ratioArray) {
            try {
                ratioList.add(Integer.parseInt(ratio.trim()));
            } catch (NumberFormatException e) {
                ratioList.add(6); 
            }
        }
        return ratioList;
    }

    public List<Integer> getColumnRatios() {
        switch (parsys) {
            case "twoparsys":
                return getTwoRatiosList();
            case "threeparsys":
                return getThreeRatiosList();
            case "fourparsys":
                return getFourRatiosList();
            case "fiveparsys":
                return getFiveRatiosList();
            default:
                return new ArrayList<>();
        }
    }
}
