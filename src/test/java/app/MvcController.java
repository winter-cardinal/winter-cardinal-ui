/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

package app;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class MvcController {
	final Logger logger = LoggerFactory.getLogger( MvcController.class );

	@PostMapping( "/logs" )
	public void logs( @RequestBody String log ) {
		logger.info( log );
	}
}
