<?php
/*
 * This file is part of con4gis, the gis-kit for Contao CMS.
 * @package con4gis
 * @author con4gis contributors (see "authors.md")
 * @license LGPL-3.0-or-later
 * @copyright (c) 2010-2026, by Küstenschmiede GmbH Software & Design
 * @link https://www.con4gis.org
 */

namespace con4gis\FrameworkBundle\Classes\Service;

use con4gis\CoreBundle\Classes\C4GUtils;
use Contao\Config;
use Contao\Environment;
use Contao\Input;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\RequestStack;

class PageUrlService
{
    private $alias;
    private $pageUrl;
    private $basePageUrl;

    public function __construct(RequestStack $requestStack)
    {
        $request = $requestStack->getCurrentRequest();
        if (!isset($_GET['item']) && Config::get('useAutoItem') && isset($_GET['auto_item'])) {
            Input::setGet('item', Input::get('auto_item',true));
        }
        if (!Input::get('item') && $request && $request->attributes->has('auto_item')) {
            $item = $request->attributes->get('auto_item');
            Input::setGet('item', $item);
        }
        $this->alias = Input::get('item') ? urlencode(Input::get('item')) : '';
        $this->pageUrl = Environment::get('base') . Environment::get('request');
        if (strpos($this->pageUrl, '?') !== false) {
            $this->pageUrl = str_replace(substr($this->pageUrl, strpos($this->pageUrl, '?')), '', $this->pageUrl);
        }
        if ($this->alias !== '') {
            $this->basePageUrl = str_replace('/' . $this->alias, '', $this->pageUrl);
        } else {
            $this->basePageUrl = $this->pageUrl;
        }
    }

    /**
     * @return string
     */
    public function getAlias(): string
    {
        return $this->alias;
    }

    /**
     * @return string
     */
    public function getPageUrl(): string
    {
        return $this->pageUrl;
    }

    /**
     * @return string
     */
    public function getBasePageUrl(): string
    {
        return $this->basePageUrl;
    }

    /**
     * @param string $alias
     * @return string
     */
    public function getPageUrlForAlias(string $alias): string
    {
        if ($this->alias !== '') {
            return str_replace('/' . $this->alias, '/' . $alias, $this->pageUrl);
        } elseif (C4GUtils::endsWith($this->pageUrl, '.html')) {
            return str_replace('.html', "/$alias.html", $this->pageUrl);
        }

        return $this->pageUrl . "/$alias";
    }
}
