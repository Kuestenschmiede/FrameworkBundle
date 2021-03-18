<?php


namespace con4gis\FrameworkBundle\Classes\DetailFields;


class DetailImageLinkField extends DetailField
{
    const TYPE = "image-link";
    
    private $wrapperClass = "";
    
    private $innerClass = "";
    
    public function getConfiguration()
    {
        $conf = parent::getConfiguration();
        $conf['wrapperClass'] = $this->wrapperClass;
        $conf['innerClass'] = $this->innerClass;
        $conf['type'] = self::TYPE;
        
        return $conf;
    }
    
    /**
     * @return string
     */
    public function getWrapperClass(): string
    {
        return $this->wrapperClass;
    }
    
    /**
     * @param string $wrapperClass
     */
    public function setWrapperClass(string $wrapperClass): void
    {
        $this->wrapperClass = $wrapperClass;
    }
    
    /**
     * @return string
     */
    public function getInnerClass(): string
    {
        return $this->innerClass;
    }
    
    /**
     * @param string $innerClass
     */
    public function setInnerClass(string $innerClass): void
    {
        $this->innerClass = $innerClass;
    }
}