<?php

namespace con4gis\FrameworkBundle\Traits;

use Contao\Config;
use Contao\Environment;
use Contao\Input;

trait AutoItemTrait
{
    protected $alias = '';
    protected $pageUrl = '';

    protected function setAlias() {
        if (!isset($_GET['item']) && Config::get('useAutoItem') && isset($_GET['auto_item'])) {
            Input::setGet('item', Input::get('auto_item'));
        }
        $this->alias = Input::get('item') ? urlencode(Input::get('item')) : '';
        $this->pageUrl = Environment::get('base').Environment::get('request');
        if ($this->alias !== '') {
            $this->pageUrl = str_replace('/'.$this->alias, '', $this->pageUrl);
        }
    }
}