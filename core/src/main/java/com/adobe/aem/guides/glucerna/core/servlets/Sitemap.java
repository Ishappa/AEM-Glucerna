package com.adobe.aem.guides.glucerna.core.servlets;

import com.day.cq.wcm.api.Page;
import com.day.cq.wcm.api.PageManager;
import org.apache.sling.api.SlingHttpServletRequest;
import org.apache.sling.api.SlingHttpServletResponse;
import org.apache.sling.api.resource.ResourceResolver;
import org.apache.sling.api.resource.ResourceResolverFactory;
import org.apache.sling.api.servlets.SlingAllMethodsServlet;
import org.osgi.service.component.annotations.Component;
import org.osgi.service.component.annotations.Reference;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import javax.servlet.Servlet;
import java.io.IOException;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.Iterator;

@Component(
        service = { Servlet.class },
        property = {
                "sling.servlet.paths=/bin/sitemap.xml",
                "sling.servlet.methods=GET"
        }
)
public class Sitemap extends SlingAllMethodsServlet {
    private static final Logger LOG = LoggerFactory.getLogger(Sitemap.class);

    @Reference
    private ResourceResolverFactory resourceResolverFactory;

    @Override
    protected void doGet(final SlingHttpServletRequest req, final SlingHttpServletResponse resp) {
        resp.setContentType("application/xml");
        resp.setCharacterEncoding("UTF-8");
        SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd");
        try {
            resp.getWriter().println("<?xml version=\"1.0\" encoding=\"UTF-8\"?>");
            resp.getWriter().println("<urlset xmlns=\"http://www.sitemaps.org/schemas/sitemap/0.9\" xmlns:xhtml=\"http://www.w3.org/1999/xhtml\">");

            final ResourceResolver resourceResolver = req.getResourceResolver();
            Page page = resourceResolver.adaptTo(PageManager.class).getPage("/content/glucerna/us/en");
            Iterator<Page> childPages = page.listChildren(null, true);
            int count = 1;

            while (childPages.hasNext()) {
                Page childPage = childPages.next();

                // Get the last modified date
                Date lastModified = childPage.getLastModified().getTime();
                String formattedDate = lastModified != null ? sdf.format(lastModified) : "";

                resp.getWriter().println("<url>");
                resp.getWriter().println("<loc>http://localhost:4502" + childPage.getPath() + ".html</loc>");
                //resp.getWriter().println("<title>" + childPage.getTitle() + "</title>");
                //resp.getWriter().println("<Count>" + count++ + "</Count>");
                //resp.getWriter().println("<lastmodifiedby>" + childPage.getLastModifiedBy() + "</lastmodifiedby>");
                resp.getWriter().println("<lastmodified>" + formattedDate + "</lastmodified>");
                resp.getWriter().println("<changefreq>"+"always"+"</changefreq>");
                resp.getWriter().println("</url>");
            }

            resp.getWriter().println("</urlset>");
        } catch (IOException e) {
            LOG.error("Error generating sitemap XML", e);
        }
    }

}
