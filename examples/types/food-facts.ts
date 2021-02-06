// @request https://world.openfoodfacts.org/api/v0/product/737628064502.json
// @lock

interface IFoodFactsResponse {
    status: number;
    code: string;
    status_verbose: string;
    product: IProduct;
}
interface IProduct {
    brands_debug_tags: any[];
    additives_original_tags: string[];
    product_name_en_debug_tags: any[];
    additives_old_tags: string[];
    manufacturing_places: string;
    brand_owner_imported: string;
    ingredients_text_debug: string;
    informers_tags: string[];
    informers: string[];
    categories_tags: string[];
    created_t: number;
    emb_codes_20141016: string;
    nutrition_grades: string;
    last_modified_t: number;
    nova_group: number;
    ingredients_n_tags: string[];
    correctors: string[];
    allergens_tags: any[];
    image_ingredients_small_url: string;
    purchase_places_tags: any[];
    data_quality_info_tags: string[];
    last_modified_by: string;
    nutrition_data_prepared_per: string;
    link: string;
    lc: string;
    sources: ISourcesItem[];
    known_ingredients_n: number;
    product_name_en_imported: string;
    labels_lc: string;
    serving_size_debug_tags: any[];
    serving_size_imported: string;
    additives_prev_original_tags: string[];
    pnns_groups_2: string;
    expiration_date_debug_tags: any[];
    nutrition_grade_fr: string;
    max_imgid: string;
    nutriments: INutriments;
    id: string;
    origins_tags: string[];
    languages: ILanguages;
    serving_size: string;
    category_properties: ICategory_properties;
    unique_scans_n: number;
    manufacturing_places_tags: any[];
    brand_owner: string;
    last_image_t: number;
    photographers_tags: string[];
    entry_dates_tags: string[];
    nutrition_data: string;
    languages_codes: ILanguages_codes;
    brands: string;
    traces_debug_tags: any[];
    unknown_nutrients_tags: any[];
    categories_lc: string;
    nutrition_data_prepared_per_debug_tags: any[];
    allergens_hierarchy: any[];
    editors: string[];
    code: string;
    interface_version_created: string;
    nutriscore_data: INutriscore_data;
    nutrition_data_per_debug_tags: any[];
    minerals_prev_tags: any[];
    creator: string;
    sortkey: number;
    nutriscore_score: number;
    ecoscore_tags: string[];
    languages_tags: string[];
    image_front_small_url: string;
    nutrition_data_per_imported: string;
    countries: string;
    categories_properties_tags: string[];
    additives_debug_tags: any[];
    ecoscore_grade: string;
    generic_name: string;
    debug_param_sorted_langs: string[];
    categories_old: string;
    interface_version_modified: string;
    ingredients_tags: string[];
    allergens: string;
    stores: string;
    image_small_url: string;
    ingredients_percent_analysis: number;
    categories_properties: ICategories_properties;
    last_editor: string;
    allergens_from_user: string;
    new_additives_n: number;
    last_edit_dates_tags: string[];
    last_image_dates_tags: string[];
    nova_groups_tags: string[];
    product_name_en: string;
    emb_codes_debug_tags: any[];
    data_quality_tags: string[];
    misc_tags: string[];
    traces_hierarchy: string[];
    packagings: IPackagingsItem[];
    nutriscore_score_opposite: number;
    packaging_tags: string[];
    manufacturing_places_debug_tags: any[];
    allergens_from_ingredients: string;
    serving_quantity: number;
    traces_from_user: string;
    image_url: string;
    nutrition_data_per: string;
    nova_group_debug: string;
    image_nutrition_thumb_url: string;
    _keywords: string[];
    emb_codes_tags: any[];
    completed_t: number;
    generic_name_en_debug_tags: any[];
    traces_tags: string[];
    additives_tags: string[];
    checkers_tags: any[];
    nutrition_grades_tags: string[];
    nutrition_score_beverage: number;
    nucleotides_prev_tags: any[];
    no_nutrition_data: string;
    rev: number;
    sources_fields: ISources_fields;
    ingredients_text_with_allergens: string;
    labels_hierarchy: string[];
    ingredients: IIngredientsItem[];
    correctors_tags: string[];
    additives_n: number;
    traces_from_ingredients: string;
    nova_groups: string;
    nutrition_data_prepared_per_imported: string;
    ingredients_original_tags: string[];
    origins_old: string;
    countries_imported: string;
    ecoscore_data: IEcoscore_data;
    checkers: any[];
    lc_imported: string;
    ciqual_food_name_tags: string[];
    quantity_debug_tags: any[];
    nutriscore_grade: string;
    image_nutrition_small_url: string;
    image_thumb_url: string;
    ingredients_that_may_be_from_palm_oil_tags: any[];
    traces: string;
    states_hierarchy: string[];
    nutrient_levels_tags: string[];
    purchase_places_debug_tags: any[];
    image_front_url: string;
    codes_tags: string[];
    ingredients_text_en_imported: string;
    data_sources: string;
    editors_tags: string[];
    amino_acids_prev_tags: any[];
    lang: string;
    image_ingredients_url: string;
    countries_debug_tags: any[];
    emb_codes: string;
    emb_codes_orig: string;
    quantity: string;
    languages_hierarchy: string[];
    ingredients_from_palm_oil_n: number;
    ingredients_from_or_that_may_be_from_palm_oil_n: number;
    nutrition_score_warning_fruits_vegetables_nuts_estimate_from_ingredients: number;
    ingredients_ids_debug: string[];
    nutrient_levels: INutrient_levels;
    ingredients_analysis_tags: string[];
    ingredients_debug: (string | null)[];
    pnns_groups_2_tags: string[];
    minerals_tags: any[];
    categories: string;
    labels_prev_hierarchy: string[];
    ingredients_text_en: string;
    data_quality_warnings_tags: string[];
    origins_lc: string;
    vitamins_prev_tags: any[];
    brands_tags: string[];
    labels_prev_tags: string[];
    categories_imported: string;
    additives_tags_n: null;
    states_tags: string[];
    states: string;
    generic_name_en: string;
    nutrition_data_prepared: string;
    'fruits-vegetables-nuts_100g_estimate': number;
    completeness: number;
    ingredients_that_may_be_from_palm_oil_n: number;
    stores_tags: any[];
    packaging: string;
    popularity_tags: string[];
    image_ingredients_thumb_url: string;
    countries_hierarchy: string[];
    product_name: string;
    unknown_ingredients_n: number;
    other_nutritional_substances_tags: any[];
    ingredients_text: string;
    photographers: string[];
    image_nutrition_url: string;
    labels_tags: string[];
    product_quantity: number;
    data_sources_tags: string[];
    data_sources_imported: string;
    images: IImages;
    ingredients_hierarchy: string[];
    ingredients_n: number;
    nutrition_score_warning_fruits_vegetables_nuts_estimate_from_ingredients_value: number;
    ingredients_text_with_allergens_en: string;
    purchase_places: string;
    cities_tags: any[];
    scans_n: number;
    compared_to_category: string;
    ingredients_from_palm_oil_tags: any[];
    link_debug_tags: any[];
    origins_hierarchy: string[];
    pnns_groups_1_tags: string[];
    additives_old_n: number;
    update_key: string;
    lang_debug_tags: any[];
    countries_lc: string;
    data_quality_bugs_tags: any[];
    image_front_thumb_url: string;
    labels: string;
    selected_images: ISelected_images;
    vitamins_tags: any[];
    packaging_debug_tags: any[];
    expiration_date: string;
    _id: string;
    ingredients_text_en_debug_tags: any[];
    pnns_groups_1: string;
    popularity_key: number;
    stores_debug_tags: any[];
    categories_hierarchy: string[];
    countries_tags: string[];
    origins: string;
    data_quality_errors_tags: any[];
    amino_acids_tags: any[];
    nucleotides_tags: any[];
    complete: number;
}
interface ISourcesItem {
    url: string | null;
    id: string;
    import_t: number;
    fields: string[];
    images: any[];
    manufacturer?: null;
    name?: string;
}
interface INutriments {
    energy_value: number;
    'trans-fat': number;
    iron_value: number;
    sugars_value: number;
    'energy-kcal_unit': string;
    'vitamin-a': number;
    salt_100g: number;
    'vitamin-a_value': number;
    fat_100g: number;
    fiber_value: number;
    'vitamin-c_100g': number;
    cholesterol_value: number;
    salt_unit: string;
    salt_value: number;
    cholesterol_serving: number;
    carbohydrates_serving: number;
    'nova-group_serving': number;
    energy_100g: number;
    cholesterol: number;
    'trans-fat_unit': string;
    calcium_100g: number;
    'trans-fat_100g': number;
    iron_serving: number;
    'nova-group_100g': number;
    iron_unit: string;
    fiber: number;
    'nutrition-score-fr_100g': number;
    'trans-fat_value': number;
    fat_value: number;
    'energy-kcal_100g': number;
    sugars_serving: number;
    energy: number;
    calcium_value: number;
    fiber_100g: number;
    proteins_100g: number;
    'vitamin-c_unit': string;
    sodium: number;
    'vitamin-a_100g': number;
    'trans-fat_serving': number;
    calcium: number;
    calcium_unit: string;
    'saturated-fat_unit': string;
    'vitamin-c': number;
    sugars: number;
    'energy-kcal': number;
    fat_serving: number;
    'saturated-fat': number;
    'saturated-fat_value': number;
    cholesterol_unit: string;
    proteins: number;
    carbohydrates: number;
    'vitamin-c_value': number;
    iron_100g: number;
    'vitamin-c_serving': number;
    fat: number;
    'nutrition-score-fr': number;
    energy_unit: string;
    carbohydrates_unit: string;
    fiber_serving: number;
    fiber_unit: string;
    sugars_unit: string;
    'energy-kcal_value': number;
    proteins_unit: string;
    sodium_serving: number;
    cholesterol_100g: number;
    sugars_100g: number;
    iron: number;
    sodium_100g: number;
    'saturated-fat_100g': number;
    'fruits-vegetables-nuts-estimate-from-ingredients_100g': number;
    proteins_serving: number;
    'nova-group': number;
    'vitamin-a_serving': number;
    calcium_serving: number;
    carbohydrates_100g: number;
    fat_unit: string;
    'energy-kcal_serving': number;
    proteins_value: number;
    'vitamin-a_unit': string;
    salt_serving: number;
    carbohydrates_value: number;
    sodium_value: number;
    salt: number;
    'saturated-fat_serving': number;
    energy_serving: number;
    sodium_unit: string;
}
interface ILanguages {
    'en:english': number;
}
interface ICategory_properties {
}
interface ILanguages_codes {
    en: number;
}
interface INutriscore_data {
    energy: number;
    saturated_fat_value: number;
    fiber: number;
    saturated_fat: number;
    is_fat: number;
    sugars_points: number;
    score: number;
    sodium_value: number;
    grade: string;
    saturated_fat_points: number;
    proteins_value: number;
    fiber_points: number;
    sodium: number;
    saturated_fat_ratio_points: number;
    fruits_vegetables_nuts_colza_walnut_olive_oils_value: number;
    is_cheese: number;
    negative_points: number;
    sugars_value: number;
    proteins: number;
    energy_points: number;
    energy_value: number;
    sugars: number;
    saturated_fat_ratio_value: number;
    positive_points: number;
    is_water: number;
    fruits_vegetables_nuts_colza_walnut_olive_oils: number;
    is_beverage: number;
    proteins_points: number;
    fruits_vegetables_nuts_colza_walnut_olive_oils_points: number;
    saturated_fat_ratio: number;
    sodium_points: number;
    fiber_value: number;
}
interface ICategories_properties {
}
interface IPackagingsItem {
    shape: string;
    material: string;
    ecoscore_shape_ratio?: number;
    ecoscore_material_score?: number;
}
interface ISources_fields {
    'org-database-usda': {
        fdc_data_source: string;
        modified_date: string;
        publication_date: string;
        available_date: string;
        fdc_category: string;
        fdc_id: string;
    };
}
interface IIngredientsItem {
    text: string;
    percent_max: number;
    has_sub_ingredients?: string;
    percent_estimate: number;
    rank?: number;
    percent_min: number;
    id: string;
    vegan?: string;
    vegetarian?: string;
    processing?: string;
}
interface IEcoscore_data {
    adjustments: IAdjustments;
    agribalyse: IAgribalyse;
    missing_agribalyse_match_warning: number;
    status: string;
    missing: IMissing;
}
interface IAdjustments {
    production_system: IProduction_system;
    origins_of_ingredients: IOrigins_of_ingredients;
    packaging: IPackaging;
    threatened_species: IThreatened_species;
}
interface IProduction_system {
}
interface IOrigins_of_ingredients {
    aggregated_origins: IAggregatedOriginsItem[];
    epi_value: number;
    epi_score: number;
    transportation_value: number;
    origins_from_origins_field: string[];
    value: number;
    transportation_score: number;
}
interface IAggregatedOriginsItem {
    origin: string;
    percent: number;
}
interface IPackaging {
    warning: string;
    score: number;
    packagings: IPackagingsItem[];
    value: number;
}
interface IThreatened_species {
}
interface IAgribalyse {
    warning: string;
}
interface IMissing {
    agb_category: number;
    packagings: number;
}
interface INutrient_levels {
    salt: string;
    fat: string;
    sugars: string;
    'saturated-fat': string;
}
interface IImages {
    1: I1;
    2: I2;
    3: I3;
    4: I4;
    5: I5;
    front: IFront;
    front_en: IFront_en;
    ingredients_en: IIngredients_en;
    ingredients: IIngredients;
    nutrition: INutrition;
    nutrition_en: INutrition_en;
}
interface I1 {
    sizes: ISizes;
    uploader: string;
    uploaded_t: number;
}
interface ISizes {
    100: I100;
    400: I400;
    full: IFull;
    200?: I200;
}
interface I100 {
    w: number;
    h: number;
}
interface I400 {
    w: number;
    h: number;
}
interface IFull {
    w: number;
    h: number;
}
interface I2 {
    sizes: ISizes;
    uploaded_t: number;
    uploader: string;
}
interface I3 {
    sizes: ISizes;
    uploader: string;
    uploaded_t: number;
}
interface I4 {
    uploader: string;
    uploaded_t: number;
    sizes: ISizes;
}
interface I5 {
    uploaded_t: number;
    uploader: string;
    sizes: ISizes;
}
interface IFront {
    geometry?: string;
    rev?: string;
    sizes?: ISizes;
    normalize?: null;
    imgid?: string;
    white_magic?: null;
    small?: ISmall;
    display?: IDisplay;
    thumb?: IThumb;
}
interface I200 {
    w: number;
    h: number;
}
interface IFront_en {
    geometry: string;
    rev: string;
    sizes: ISizes;
    normalize: null;
    imgid: string;
    white_magic: null;
}
interface IIngredients_en {
    white_magic: null;
    imgid: string;
    sizes: ISizes;
    normalize: string;
    geometry: string;
    rev: string;
}
interface IIngredients {
    white_magic?: null;
    imgid?: string;
    sizes?: ISizes;
    normalize?: string;
    geometry?: string;
    rev?: string;
    thumb?: IThumb;
    small?: ISmall;
    display?: IDisplay;
}
interface INutrition {
    white_magic?: null;
    imgid?: string;
    geometry?: string;
    rev?: string;
    sizes?: ISizes;
    normalize?: string;
    thumb?: IThumb;
    display?: IDisplay;
    small?: ISmall;
}
interface INutrition_en {
    white_magic: null;
    imgid: string;
    geometry: string;
    rev: string;
    sizes: ISizes;
    normalize: string;
}
interface ISelected_images {
    ingredients: IIngredients;
    front: IFront;
    nutrition: INutrition;
}
interface IThumb {
    en: string;
}
interface ISmall {
    en: string;
}
interface IDisplay {
    en: string;
}
