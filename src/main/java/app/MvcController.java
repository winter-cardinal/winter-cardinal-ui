/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

package app;

import java.io.IOException;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.server.ResponseStatusException;
import org.springframework.web.servlet.ModelAndView;

@RestController
public class MvcController {
	final Logger logger = LoggerFactory.getLogger(MvcController.class);
	final PageList pages = new PageList();

	@GetMapping( "/" )
	public ModelAndView index() throws IOException {
		ModelAndView mav = new ModelAndView( "index" );
		mav.addObject( "pages", pages );
		return mav;
	}

	@GetMapping( "/{page}" )
	public ModelAndView page( @PathVariable( "page" ) String page, @RequestParam( value = "theme", defaultValue = "white" ) String theme ) {
		if( ! pages.contains( page ) ) {
			throw new ResponseStatusException( HttpStatus.NOT_FOUND );
		}
		ModelAndView mav = new ModelAndView( page );
		mav.addObject( "theme", theme );
		return mav;
	}

	@PostMapping( "/logs" )
	public void logs( @RequestBody String log ) {
		logger.info( log );
	}
}
