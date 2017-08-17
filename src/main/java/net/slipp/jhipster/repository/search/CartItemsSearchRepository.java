package net.slipp.jhipster.repository.search;

import net.slipp.jhipster.domain.CartItems;
import org.springframework.data.elasticsearch.repository.ElasticsearchRepository;

/**
 * Spring Data Elasticsearch repository for the CartItems entity.
 */
public interface CartItemsSearchRepository extends ElasticsearchRepository<CartItems, Long> {
}
