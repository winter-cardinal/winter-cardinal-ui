/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

package app;

import java.io.IOException;
import java.util.ArrayList;
import java.util.List;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.core.io.Resource;
import org.springframework.core.io.support.PathMatchingResourcePatternResolver;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.ModelAndView;

@RestController
public class MvcController {
	final Logger logger = LoggerFactory.getLogger(MvcController.class);

	@GetMapping("/")
	public ModelAndView index() throws IOException {
		List<String> links = new ArrayList<>();
		PathMatchingResourcePatternResolver loader = new PathMatchingResourcePatternResolver();
		Resource[] resources = loader.getResources("classpath:/static/**/*.*");
		for( Resource resource : resources ) {
			String path = resource.getURL().toExternalForm();
			int index = path.indexOf( "static" );
			if( 0 <= index ) {
				links.add( path.substring( index + 7 ) );
			}
 		}

		ModelAndView mav = new ModelAndView("index");
		mav.addObject("links", links);
		return mav;
	}

	@PostMapping( "/logs" )
	public void logs( @RequestBody String log ) {
		logger.info( log );
	}
}
