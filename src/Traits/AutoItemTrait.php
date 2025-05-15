<?php
/*
 * This file is part of con4gis, the gis-kit for Contao CMS.
 * @package con4gis
 * @version 10
 * @author con4gis contributors (see "authors.txt")
 * @license LGPL-3.0-or-later
 * @copyright (c) 2010-2025, by Küstenschmiede GmbH Software & Design
 * @link https://www.con4gis.org
 */

namespace con4gis\FrameworkBundle\Traits;

use Contao\Config;
use Contao\Environment;
use Contao\Input;

trait AutoItemTrait
{
    protected $alias = '';
    protected $pageUrl = '';

    protected function setAlias($request) {
        if (!isset($_GET['item']) && Config::get('useAutoItem') && isset($_GET['auto_item'])) {
            Input::setGet('item', Input::get('auto_item', true));
        }
        if (!Input::get('item') && $request && $request->attributes->has('auto_item')) {
            $item = $request->attributes->get('auto_item');
            Input::setGet('item', $item);
        }
        $this->alias = Input::get('item') ? urlencode(Input::get('item')) : '';
        $this->pageUrl = Environment::get('base').Environment::get('request');
        if (strpos($this->pageUrl, "?") !== false) {
            $this->pageUrl = str_replace(substr($this->pageUrl, strpos($this->pageUrl, "?")), "", $this->pageUrl);
        }
        if ($this->alias !== '') {
            $this->pageUrl = str_replace('/'.$this->alias, '', $this->pageUrl);
        }
    }
}