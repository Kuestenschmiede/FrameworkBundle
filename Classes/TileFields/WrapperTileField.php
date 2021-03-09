<?php
/**
 * This file is part of con4gis,
 * the gis-kit for Contao CMS.
 *
 * @package    con4gis
 * @version    7
 * @author     con4gis contributors (see "authors.txt")
 * @license    LGPL-3.0-or-later
 * @copyright  Küstenschmiede GmbH Software & Design
 * @link       https://www.con4gis.org
 */
namespace con4gis\FrameworkBundle\Classes\TileFields;

/**
 * Class WrapperTileField
 * Field class to wrap one or multiple fields into an additional div.
 * NOTE: For this to work, the wrapper field has to be listed before the wrapped
 * fields in the field list.
 * @package con4gis\FrameworkBundle\Classes\TileFields
 */
class WrapperTileField extends TileField
{
    const TYPE = 'wrapper';

    /**
     * An array of field names which should be wrapped by this field.
     * @var array
     */
    private $wrappedFields = [];

    public function getConfiguration(): array
    {
        $conf = parent::getConfiguration();
        $conf['wrappedFields'] = $this->wrappedFields;

        return $conf;
    }

    /**
     * @return array
     */
    public function getWrappedFields(): array
    {
        return $this->wrappedFields;
    }

    /**
     * @param array $wrappedFields
     */
    public function setWrappedFields(array $wrappedFields): void
    {
        $this->wrappedFields = $wrappedFields;
    }
}
